export class UsersServise {
  users: { name: string; status: boolean }[] = [
    { name: 'Manu', status: true },
    { name: 'Chris', status: true },
    { name: 'Max', status: true },
    { name: 'Anna', status: false },
    { name: 'Piter', status: false },
  ];

  changeUserStatus(index: number) {
      this.users[index].status = !this.users[index].status;
  }
}
