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
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Survey from "../../domain/Survey/Survey";
import { getRandomNum } from "../../utils/getRandomNum";

const Time = () => {
  const [rating, setRating] = useState<Number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const onChange = (rate: Number) => {
    setRating(rate);
  };

  const weekends = [6, 7, 13, 14, 20, 21, 27, 28];

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
              {headColumns.map((headColumn, index) => (
                <TableBodyCell
                  style={{
                    background: weekends.includes(index + 1)
                      ? "#f5f9fa"
                      : "inherit",
                  }}
                  onClick={toggleOpen}
                ></TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              ></TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyTitleCell>Trip/Vacation</TableBodyTitleCell>
              {headColumns.map((headColumn, index) => (
                <TableBodyCell
                  style={{
                    background: weekends.includes(index + 1)
                      ? "#f5f9fa"
                      : "inherit",
                  }}
                ></TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              ></TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyProjectCell>MAI TAI</TableBodyProjectCell>
              {headColumns.map((headColumn, index) => (
                <TableBodyCell
                  style={{
                    background: weekends.includes(index + 1)
                      ? "#f5f9fa"
                      : "inherit",
                  }}
                >
                  {Number(getRandomNum(0, 10)) > 5 &&
                    !weekends.includes(index + 1) &&
                    getRandomNum(0, 9)}
                </TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              >
                {Number(getRandomNum(0, 10)) > 5 && getRandomNum(0, 9)}
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyProjectCell>GIN TONIC</TableBodyProjectCell>
              {headColumns.map((headColumn, index) => (
                <TableBodyCell
                  style={{
                    background: weekends.includes(index + 1)
                      ? "#f5f9fa"
                      : "inherit",
                  }}
                >
                  {Number(getRandomNum(0, 10)) > 5 &&
                    !weekends.includes(index + 1) &&
                    getRandomNum(0, 9)}
                </TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              >
                {Number(getRandomNum(0, 10)) > 5 && getRandomNum(0, 9)}
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyProjectCell>TEQUILA SUNRISE</TableBodyProjectCell>
              {headColumns.map((headColumn, index) => (
                <TableBodyCell
                  style={{
                    background: weekends.includes(index + 1)
                      ? "#f5f9fa"
                      : "inherit",
                  }}
                >
                  {Number(getRandomNum(0, 10)) > 5 &&
                    !weekends.includes(index + 1) &&
                    getRandomNum(0, 9)}
                </TableBodyCell>
              ))}
              <TableBodyCell
                style={{ paddingRight: 8, width: 81, textAlign: "right" }}
              >
                {Number(getRandomNum(0, 10)) > 5 && getRandomNum(0, 9)}
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
        <div
          style={{
            maxWidth: "50%",
            float: "right",
            marginRight: "75px",
            marginTop: "14px",
            borderLeft: "1px solid #80a0a957",
            width: "48%",
            paddingLeft: 35,
          }}
        >
          <h2>Today's question:</h2>
          <Survey />
        </div>
      </TimesheetWrapper>
      <DialogWrapper open={open} onClose={() => {}}>
        <Dialog open={open} onClose={() => {}}>
          <DialogTitle>How was you day today?</DialogTitle>
          <CloseButton onClick={toggleOpen} />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "70px",
            }}
          >
            <Rating
              onChange={onChange}
              emptySymbol={<AiOutlineStar size={50} color="#ffc000" />}
              fullSymbol={<AiFillStar size={50} color="#ffc000" />}
            />
          </div>
          <div>
            <SaveButton>Save</SaveButton>
          </div>
        </Dialog>
      </DialogWrapper>
    </>
  );
};

export default Time;
