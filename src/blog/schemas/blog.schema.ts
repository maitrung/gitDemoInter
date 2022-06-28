import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
Schema()
  export const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String 
  }) 