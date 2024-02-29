"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			console.log("Redirecting ....");
			router.push("/es");
		}, 1000);
	}, []);
	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<p>loading...</p>
		</div>
	);
};

export default Page;
