# Code Templates

## Next.js Page Template

```tsx
import React from 'react'
import { NextPage } from 'next'

const PageName: NextPage = () => {
  return <div>Page Content</div>
}

export default PageName
```

## component template

```tsx
import React from 'react'

interface Props {
  // Define your props here
}

const ComponentName: React.FC<Props> = () => {
  return <div>Component Content</div>
}

export default ComponentName
```

## API Template

### Controller template

```ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }
}
```

### Service template

```ts
import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  private users = []

  create(createUserDto: CreateUserDto) {
    const user = { id: Date.now(), ...createUserDto }
    this.users.push(user)
    return user
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === parseInt(id))
  }
}
```

### Module template

```ts
import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
```

### DTO template

```ts
import { IsString, IsEmail } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsEmail()
  email: string
}
```
