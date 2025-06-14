export type UserName = {
  firstName: string;
  middleName: string;
  lasttName: string;
};
export type Gurdian = {
  fatherName: string;
  fatherContactNumber: string;
  fatherOccupation: string;
  motherName: string;
  motherContactNumber: string;
  motherOccupation: string;
};
export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodgroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  isActive: "active" | "inActive";
};
