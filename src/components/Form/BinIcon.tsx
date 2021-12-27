import { DeleteOutlined } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

type Props = {
  position: "start" | "end";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const BinIcon = ({ position, onClick }: Props) => (
  <InputAdornment position={position}>
    <IconButton onClick={onClick}>
      <DeleteOutlined />
    </IconButton>
  </InputAdornment>
);

export default BinIcon;
