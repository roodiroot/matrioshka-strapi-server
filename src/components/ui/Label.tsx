type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label
      {...props}
      className="text-start block font-bold mb-1 tracking-tight-custom text-lg"
    >
      {children}
    </label>
  );
};
export default Label;
