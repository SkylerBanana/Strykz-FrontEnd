'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from "zod";
import { createClient } from '../../../utils/supabase/server'


const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .regex(/^[a-zA-Z]+$/, "Username must not contain numbers or special characters"),
  
  email: z
    .string()
    .email("Must be a valid email address"),
  
  password: z
    .string()
    .min(12, "Password must be at least 12 characters long")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
  
  confirmPassword: z
    .string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"], 
});

interface UserFormErrors {
  username: string[];
  password: string[];
  email: string[];
  confirmPassword: string[];
}


export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}










export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs


  const inputData = {
    username: formData.get('username') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  
  const validation = userSchema.safeParse(inputData);

  if (!validation.success) {

    let obj: UserFormErrors = {
      username: [],
      password: [],
      email: [],
      confirmPassword: []
    };



    
    
    validation.error.errors.map((err) => {
        switch (err.path[0]) {
          case "username": obj.username.push(err.message)
          break;
          case "password": obj.password.push(err.message)
          break;
          case "email": obj.email.push(err.message)
          break;
          case "confirmPassword": obj.confirmPassword.push(err.message)
          break;

          default:
            return -1;
        }
      }
    );
    
    return obj;
    
   
  }


  const { username, email, password } = validation.data;

  const data = {
    email,
    password,
    options:{
      data: {
        displayName: username,
      }
    }
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}