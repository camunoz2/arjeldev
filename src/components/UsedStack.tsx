const UsedStack = ({ stack = [""] }) => {
  return (
    <div className="flex flex-wrap items-start justify-center rounded-xl bg-arjelgrey2 p-4 gap-2">
      {stack.map((el, index) => (
        <p
          key={index}
          className="text-white text-sm bg-arjelgrey3 rounded-sm p-2"
        >
          {el}
        </p>
      ))}
    </div>
  );
};

export default UsedStack;
