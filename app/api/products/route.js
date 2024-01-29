import { connectionStr } from "@/lib/db";
import { BrandList } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await BrandList.find();
  return NextResponse.json(data);
}

export async function POST(req) {
  const payLoad = await req.json();
  await mongoose.connect(connectionStr);
  console.log(payLoad);
  let data = new BrandList(payLoad);
  const result = data.save();
  return NextResponse.json({ result });
}
