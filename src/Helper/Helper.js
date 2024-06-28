export function ColorStatus(status) {
   status = status.toUpperCase();
   switch (status) {
      case "PENDING":
         return "orange";
      case "REJECTED":
         return "red";
      case "APPROVED":
         return "green";
      case "CANCEL":
         return "grey";
   }
}

export const StatusList = [
   { label1: 'APPROVE', label2: 'APPROVED', value: 'APPROVED' },
   { label1: 'PENDING', label2: 'PENDING', value: 'PENDING' },
   { label1: 'REJECT', label2: 'REJECTED', value: 'REJECTED' },
   { label1: 'CANCEL', label2: 'CANCEL', value: 'CANCEL' },
]