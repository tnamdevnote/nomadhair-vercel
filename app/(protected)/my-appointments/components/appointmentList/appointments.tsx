import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Button } from "@/components/atoms/button";

import React from "react";
import EditDialog from "../editDialog/editDialog";
import CancelDialog from "../cancelDialog/cancelDialog";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getAppointments } from "@/lib/sanity/client";
import { formatToDisplayDate, formatToDisplayTime } from "@/lib/utils";
import Image from "next/image";
import walk from "@/public/illustrations/walk.svg";

export default async function Appointments() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const appointments = await getAppointments(user?.id);

  if (appointments.length === 0) {
    return (
      <div className="flex w-full flex-col items-center gap-16 pt-20">
        <Image src={walk} width={280} alt="walk image" />
        <p className="max-w-96 text-center">
          There are no upcoming appointments. Please schedule your next
          appointment.
        </p>
      </div>
    );
  }
  return (
    <>
      {appointments.map((appointment) => (
        <Card key={appointment.id}>
          <CardContent className="flex flex-col gap-4">
            <p className="inline-flex gap-2 text-base font-bold">
              <CalendarIcon />
              {formatToDisplayDate(appointment.date)}
            </p>
            <p className="inline-flex gap-2 text-base font-bold">
              <ClockIcon />
              {formatToDisplayTime(appointment.time)}
            </p>
            <p className="text-sm">
              {[
                appointment.address1,
                appointment.address2,
                appointment.city,
                appointment.state,
                appointment.zipCode,
              ]
                .filter((address) => address)
                .join(", ")}
            </p>
            <p className="line-clamp-2 overflow-hidden text-ellipsis text-wrap text-sm">
              {appointment.comment}
            </p>
          </CardContent>
          <CardFooter className="inline-flex justify-end gap-4">
            <CancelDialog
              appointmentId={appointment.id}
              trigger={
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 md:w-32 md:flex-none"
                >
                  Cancel
                </Button>
              }
            />
            <EditDialog
              appointment={appointment}
              trigger={
                <Button size="sm" className="flex-1 md:w-32 md:flex-none">
                  Edit
                </Button>
              }
            />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}