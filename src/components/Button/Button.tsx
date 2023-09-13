interface ButtonProps {
  Icon: string;
  label: string;
}

const Button = ({ Icon, label }: ButtonProps) => {
  return (
    <div className="flex px-3 py-2 space-x-2 rounded-md bg-rose-700 w-fit">
      <img src={Icon} alt={label} />
      <span className="font-dmsans">{label}</span>
    </div>
  );
};

export default Button;
