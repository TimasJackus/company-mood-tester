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
import useSWR from "swr";
import { CgCheck } from "react-icons/cg";


interface AnswerResponse {
    created_at: string;
    id: string;
    questionId: string;
    rating: number;
    userId: string;
}

interface LogResponse {
    created_at: string;
    id: string;
    questionId: string;
}

interface TimeSheetResponse {
    answer: AnswerResponse | null;
    answeredThisWeek: boolean;
    id: string;
    logs: LogResponse[];
    question: string;
    today: boolean;
}

const Time = () => {
  const [rating, setRating] = useState<Number | null>(null);
  const [changed, setChanged] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLog, setSelectedLog] = useState<TimeSheetResponse | undefined>();

  const {data: user} = useSWR("/api/v1/users/me");
  const fromDate = new Date("2021-08-01").toISOString();
  const toDate = new Date("2021-09-01").toISOString();
  const userId = useMemo(() => user?.id, [user?.id])
  const {data: timesheet} = useSWR<TimeSheetResponse[], any>(userId ? `/question/timesheet?from=${fromDate}&to=${toDate}&userId=${userId}` : null);


  const logMap = useMemo(() => {
    if(!timesheet) return [];
    return timesheet.map(sheet => [...sheet?.logs]).flat();
  }, [timesheet])

  const logs = useMemo(() => logMap.map(log => ({...log, day: new Date(log?.created_at).getDay()})), [logMap])

  const getLogByDay = useCallback((day: number) => {
      return logs?.find(log => log.day === day);
  }, [logs])

  const findLog = useCallback((id: string | undefined) => {
      return timesheet?.find(sheet => sheet.id === id)
  }, [timesheet])


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
              {headColumns.map((headColumn, index) => {
                const currentLog = getLogByDay(index + 1);
                const foundLog = findLog(currentLog?.questionId);

                return <TableBodyCell
                            style={{
                            background: weekends.includes(index + 1)
                                ? "#f5f9fa"
                                : "inherit",
                            }}
                            onClick={() => {
                                if(foundLog) {
                                    setSelectedLog(foundLog);
                                    toggleOpen();
                                }
                            }}
                        >{foundLog?.id === "3" && !changed && "-"}{foundLog?.id === "3" && changed && <CgCheck size={24} color="green" style={{marginBottom: -10}} />}{!!foundLog && !foundLog?.answer && foundLog?.id !== "3" && "-"}{!!foundLog?.answer && <CgCheck size={24} color="green" style={{marginBottom: -10}} />}</TableBodyCell>
              })}
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
                   {
                    !weekends.includes(index + 1) && index < 7 && index > 5 &&
                    "7.6"}
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
                  {
                    !weekends.includes(index + 1) && index < 7 && index > 2 &&
                    "5.2"}
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
                  {index > 3 &&
                    !weekends.includes(index + 1) && index < 7 &&
                    "8.5"}
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
          <DialogTitle>{selectedLog?.question}</DialogTitle>
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
            <SaveButton onClick={() => {
                if(selectedLog?.id === "3") setChanged(true);
                toggleOpen();
            }}>Save</SaveButton>
          </div>
        </Dialog>
      </DialogWrapper>
    </>
  );
};

export default Time;
