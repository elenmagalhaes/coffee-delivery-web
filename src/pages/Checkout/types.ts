import type { Address, PaymentMethod } from "@/hooks";

export interface Inputs extends Address {
	paymentMethod?: PaymentMethod;
}