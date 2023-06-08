import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly Users = [
    {
      uid: '8d075f2e-14f9-4e29-bf11-153357b83e6e',
      username: 'dice_bear',
      email: 'harshawije99@gmail.com',
      password: 'abc@123',
      key: 'b3646f4f',
    },
    {
      uid: '3c8ee72f-283c-485e-81cf-21ef56d59670',
      username: 'jokers_lab',
      email: 'harshana.jokersarmy@gmail.com',
      password: 'joker@123',
      key: '43c3000e',
    },
  ];

  async findSingleUser(username: string): Promise<User | undefined> {
    return this.Users.find((user) => user.username === username);
  }
}
