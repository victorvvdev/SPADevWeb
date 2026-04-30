import { Button } from 'react-bootstrap';

function CustomButton({ text, onClick, variant = "success" }) {
  return (
    <Button variant={variant} onClick={onClick} className="mt-2">
      {text}
    </Button>
  );
}

export default CustomButton;