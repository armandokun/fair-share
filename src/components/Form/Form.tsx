import { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Add, DeleteOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import { REQUIRED_SALARIES } from "../../constants";
import {
  getIndividualPayment,
  getSalaryPercent,
  decimalCount,
} from "../../helpers/form";

const Form = () => {
  const [salaries, setSalaries] = useState<number[]>([0, 0]);
  const [salaryPercent, setSalaryPercent] = useState(0);
  const [rentToPay, setRentToPay] = useState(0);

  const { t } = useTranslation("translation", { keyPrefix: "form" });

  useEffect(() => {
    setSalaryPercent(getSalaryPercent(salaries, rentToPay));
  }, [salaries, rentToPay]);

  const handleChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const newSalaries = [...salaries];

      newSalaries[index] = Number(event.target.value);
      setSalaries(newSalaries);
    };

  const handleRemove = (index: number) => () =>
    setSalaries((prevState) => {
      prevState.splice(index, 1);
      return [...prevState];
    });

  const renderBinIcon = (index: number) => (
    <InputAdornment position="end">
      <IconButton onClick={handleRemove(index)}>
        <DeleteOutlined />
      </IconButton>
    </InputAdornment>
  );

  const renderSalariesInputs = () => {
    return salaries.map((_, index) => {
      return (
        <TextField
          key={`salary-${index}`}
          label={t("salary.title", { number: index + 1 })}
          type="number"
          InputProps={{
            endAdornment: index >= REQUIRED_SALARIES && renderBinIcon(index),
          }}
          required={index < REQUIRED_SALARIES}
          onChange={handleChange(index)}
        />
      );
    });
  };

  const renderEvaluationNote = () => {
    if (salaryPercent > 99) return t("evaluation_note.title.error");
    if (salaryPercent === 50) return t("evaluation_note.title.half");
    if (salaryPercent > 50) return t("evaluation_note.title.too_much");
    if (salaryPercent < 10) return t("evaluation_note.title.cheap");

    return null;
  };

  const renderSummary = () => {
    const formattedSalaryPercent = salaryPercent.toPrecision(2);
    const summarySalaryPercentText =
      decimalCount(salaryPercent) === 0
        ? t("summary.description_exact", {
            salaryPercent: formattedSalaryPercent,
          })
        : t("summary.description_around", {
            salaryPercent: formattedSalaryPercent,
          });

    return (
      <Container sx={{ mb: 2 }}>
        <Box sx={{ "& .MuiTextField-root": { m: 2 } }}>
          <Typography variant="h6">{t("summary.title")}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {summarySalaryPercentText}
          </Typography>
          {salaries.map((salary, index) => {
            return (
              <Typography variant="body1" key={`summary-${index}`}>
                {t("summary.salary.title", {
                  number: index + 1,
                  payment: getIndividualPayment(salary, salaryPercent),
                })}
              </Typography>
            );
          })}
          <Typography variant="body2" sx={{ mt: 2 }}>
            {renderEvaluationNote()}
          </Typography>
        </Box>
      </Container>
    );
  };

  return (
    <Card variant="outlined" sx={{ m: 3 }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
      >
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={() => setSalaries((prevState) => [...prevState, 0])}
          sx={{ mt: 2, ml: 2 }}
        >
          {t("actions.add")}
        </Button>
        <Stack spacing={1}>{renderSalariesInputs()}</Stack>
        <Divider variant="middle" />
        <TextField
          required
          id="outlined-required"
          label={t("rent.title")}
          type="number"
          onChange={(e) => setRentToPay(Number(e.target.value))}
        />
        {!!salaryPercent && renderSummary()}
      </Box>
    </Card>
  );
};

export default Form;
