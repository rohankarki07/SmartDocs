import CollabrativeRoom from "@/components/CollabrativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) redirect("/");

  // TODO  access permissions of the users to the document

  return (
    <main>
      {/* <CollabrativeRoom /> */}
      <CollabrativeRoom roomId={id} roomMetadata={room.metadata} />
    </main>
  );
};

export default Document;
