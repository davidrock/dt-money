import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Description" required />
            <input type="number" placeholder="Price" required />
            <input type="text" placeholder="Category" required />

            <TransactionType>
              <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24}></ArrowCircleUp>
              </TransactionTypeButton>

              <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24}></ArrowCircleDown>
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Add</button>
          </form>
        </Content>
      </Dialog.Portal>
    </>
  );
}
