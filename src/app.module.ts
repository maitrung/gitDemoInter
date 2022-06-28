import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { MongooseModule } from '@nestjs/mongoose'; 
import { BlogModule } from './blog/blog.module';
@Module({   
      imports: [ MongooseModule.forRoot('mongodb+srv://maitrung:Trungkien999@cluster0.jnruewp.mongodb.net/blog_backend?retryWrites=true&w=majority',{useNewUrlParser: true }), BlogModule,],   
      controllers: [AppController],   
      providers: [AppService], }) export class AppModule { }