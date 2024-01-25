import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransacationsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (ctx) => {
    return ctx.transactions;
  });

  return (
    <>
      <Header />
      <Summary />

      <TransacationsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((t) => {
              return (
                <tr key={t.id}>
                  <td width="45%">{t.description}</td>
                  <td>
                    <PriceHighlight variant={t.type}>
                      {t.type === "outcome" && "- "}
                      {priceFormatter.format(t.price)}
                    </PriceHighlight>
                  </td>
                  <td>{t.category}</td>
                  <td>{new Date(t.createdAt).toDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransacationsContainer>
    </>
  );
}
