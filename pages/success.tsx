import { CheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;
  return (
    <div>
      <Head>
        <title>Thank you</title>
      </Head>
      <header>
        <Link href="/">
          <div className=" cursor-pointer w-screen h-12 bg-green-600 flex justify-center items-center">
            <h1 className="text-white">offers going on <span className="underline">visit now</span></h1>
          </div>
        </Link>
        <main>
          <div className=" my-5 flex w-full justify-center items-center space-x-5">
            <div className="w-11 h-11 flex justify-center items-center rounded-full border border-black ">
              <CheckIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-bold">Thank You</h1>
              <h4>order #{session_id?.slice(-5)}</h4>
            </div>
          </div>
          <div className="mx-4 divide-y divide-gray-400 rounded-md border border-gray-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
                <p>Your order is confirmed</p>
                <p className="text-sm text-gray-600">
                    we have accepted your order, and we are getting it rady. Come back to this page for updates on shipment status.
                </p>
            </div>
            <div className="pt-3 text-sm">
                <p className="font-medium">Tracking Number </p>
                <p className="text-sm text-gray-600">
                #{session_id}
                </p>
            </div>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Success;
