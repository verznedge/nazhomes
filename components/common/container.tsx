interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl py-20 lg:py-28 px-3 h-full">
      {children}
    </div>
  );
};

export default Container;
