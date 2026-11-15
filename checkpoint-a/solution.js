
import { findOrderById, findAllOrders } from "./orders-db.js";
export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Cairo" && order.status === "paid"
  );
}

export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch {
    return `Could not find order ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(({ item, price }) => ({ item, price }))
  );
}
