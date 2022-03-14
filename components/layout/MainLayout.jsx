import { Nav } from 'components';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
