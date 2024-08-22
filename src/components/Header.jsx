const Name = () => {
  return <p className="font-normal text-3xl mr-auto  gap-4 ">ULEMJUE</p>;
};
const List = () => {
  return <div className="   ml-auto sm:max-md:hidden"></div>;
};

const Burger = () => {
  return (
    <div className="sm`:hidden">
      <img src="/burger.png" />
    </div>
  );
};

export const Header = () => {
  return (
    <div className="flex">
      <Name />
      <List />
      <Burger />
    </div>
  );
};
