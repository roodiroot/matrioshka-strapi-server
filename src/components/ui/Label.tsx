interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}
const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label
      {...props}
      htmlFor=""
      className="text-start block font-bold mb-1 tracking-tight-custom text-lg"
    >
      {children}
    </label>
  );
};
export default Label;
