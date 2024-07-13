type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser<T extends User>(initialValues: Partial<T>) {
  // Оновлення користувача
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});