import Avatar from './Avatar';
import Button from './Button';
import Card from './Card';
import CardList from './CardList';
import { Chart } from './Chart';
import Form from './Form';
import StepForm from './Form/StepForm';
import Header from './Header';
import Input from './Input';
import Nav from './Nav';
import Select from './Select';

export const ComponentList = {
  Avatar: <Avatar />,
  Button: <Button />,
  Card: <Card />,
  CardList: <CardList />,
  Chart: <Chart />,
  Input: <Input />,
  Form: <Form />,
  StepForm: <StepForm />,
  Header: <Header />,
  Nav: <Nav />,
  Select: <Select />,
};

function ComponentTest({ name }: { name: string }) {
  if (!Object.keys(ComponentList).includes(name)) throw new Error('not allowed key');

  const Component = ComponentList[name as keyof typeof ComponentList];

  return <div className="box-border flex h-screen w-full items-center justify-center">{Component}</div>;
}

export default ComponentTest;
