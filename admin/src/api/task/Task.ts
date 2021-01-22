import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type Task = {
  assignedTo: UserWhereUniqueInput | null;
  baboon: boolean | null;
  createdAt: Date;
  estimation: number | null;
  id: string;
  project: ProjectWhereUniqueInput;
  startDate: Date;
  status: "new" | "pending" | "onHold" | "ongoing" | "done";
  title: string;
  updatedAt: Date;
};
