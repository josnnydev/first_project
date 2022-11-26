import { Controller, Get, Post,Put,Delete, Body, Param,Req,Res } from '@nestjs/common';
import { Request,Response } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';


@Controller('tasks')
export class TasksController {
    @Get()
      getTask(): {hello: string} {
          return {"hello":"Josnny"};
      }
    // getTask(@Req() req, @Res() res):Promise<Response>{
    //    return res.send('hello');
    // }

    @Post()
    createTask(@Body() task: CreateTaskDto){
        console.log(task.title)
        return 'create';
    }

    @Put(':id')
    updateTask(@Body() task:CreateTaskDto, @Param('id') id): string{
        console.log(task)
        console.log(id)
        return 'update';
    }

    @Delete(':id')
    deleteTask(@Param('id') id){
        console.log(id)
        return 'delete';
    }


}
