import { useCallback, useMemo } from "react";
import ftlTime from "../../assets/images/fltTime.png";
import assignProjectField from "../../assets/images/AssignProjectField.png";
import { AssignProjectWrapper } from "../../ui/AssignProjectWrapper";
import { Table } from "../../ui/Table";
import { TableBody } from "../../ui/TableBody";
import { TableBodyCell } from "../../ui/TableBodyCell";
import { TableBodyProjectCell } from "../../ui/TableBodyProjectCell";
import { TableBodyTitleCell } from "../../ui/TableBodyTitleCell";
import { TableHead } from "../../ui/TableHead";
import { TableHeadCell } from "../../ui/TableHeadCell";
import { TableHeadTitleCell } from "../../ui/TableHeadTitleCell";
import { TableRow } from "../../ui/TableRow";
import { TimesheetWrapper } from "../../ui/TimesheetWrapper";
import { useState } from "react";
import { Dialog } from "../../ui/Dialog/Dialog";
import { DialogTitle } from "../../ui/DialogTitle";
import { CloseButton } from "../../ui/CloseButton";
import { DialogWrapper } from "../../ui/DialogWrapper";
import { SaveButton } from "../../ui/SaveButton";
import { getRandomNum } from "../../utils/getRandomNum";

const Time = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => setOpen((prevOpen) => !prevOpen), []);

  const headColumns = useMemo(() => {
    const months = [];
    for (let i = 1; i <= 31; i++) {
      months.push(i);
    }
    return months;
  }, []);

  return (
    <>
      <img alt="ftlTime" src={ftlTime} height="70px" width="997px" />
      <TimesheetWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadTitleCell>Project</TableHeadTitleCell>
              {headColumns.map((headColumn) => (
                <TableHeadCell>{headColumn}</TableHeadCell>
              ))}
              <TableHeadTitleCell style={{ paddingLeft: 8, width: 81 }}>
                Total
              </TableHeadTitleCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableBodyTitleCell>Mood</TableBodyTitleCell>
              {headColumns.map((headColumn) => (
                <TableBodyCell onClick={toggleOpen}></TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              ></TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyTitleCell>Trip/Vacation</TableBodyTitleCell>
              {headColumns.map((headColumn) => (
                <TableBodyCell></TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              ></TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyProjectCell>MAI TAI</TableBodyProjectCell>
              {headColumns.map((headColumn) => (
                <TableBodyCell>{getRandomNum(0, 9)}</TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              >
                {getRandomNum(0, 9)}
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyProjectCell>GIN TONIC</TableBodyProjectCell>
              {headColumns.map((headColumn) => (
                <TableBodyCell>{getRandomNum(0, 9)}</TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              >
                {getRandomNum(0, 9)}
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyProjectCell>TEQUILA SUNRISE</TableBodyProjectCell>
              {headColumns.map((headColumn) => (
                <TableBodyCell>{getRandomNum(0, 9)}</TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              >
                {getRandomNum(0, 9)}
              </TableBodyCell>
            </TableRow>
          </TableBody>
        </Table>
        <AssignProjectWrapper>
          <img
            alt="assignProjectWrapper"
            src={assignProjectField}
            height="35px"
            width="331px"
          />
        </AssignProjectWrapper>
      </TimesheetWrapper>
      <DialogWrapper open={open} onClose={() => {}}>
        <Dialog open={open} onClose={() => {}}>
          <DialogTitle>How was you day today?</DialogTitle>
          <CloseButton onClick={toggleOpen} />
          <br />
          <div>
            <SaveButton>Save</SaveButton>
          </div>
        </Dialog>
      </DialogWrapper>
    </>
  );
};

export default Time;
