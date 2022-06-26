const Error = ({children}) => {
  return (
    <div className="text-red-600 text-center mt-5 py-3 rounded-md bg-gray-100">
      {children}
    </div>
  );
};

export default Error;
