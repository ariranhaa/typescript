type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'ariranha', password: 'ababa' };
const sentUser = { username: 'ariranha', password: 'ababa' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
