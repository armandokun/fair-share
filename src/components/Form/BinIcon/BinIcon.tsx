import { useTranslation } from "react-i18next";
import { DeleteOutlined } from "@mui/icons-material";
import { IconButton, InputAdornment, Tooltip } from "@mui/material";

type Props = {
  position: "start" | "end";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const BinIcon = ({ position, onClick }: Props) => {
  const { t } = useTranslation();

  const title = t("form.actions.remove");

  return (
    <Tooltip title={title} placement="right">
      <InputAdornment position={position}>
        <IconButton onClick={onClick} data-testid="remove-button">
          <DeleteOutlined />
        </IconButton>
      </InputAdornment>
    </Tooltip>
  );
};

export default BinIcon;
