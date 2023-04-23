import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransacationsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransacationsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website Freelance</td>
              <td>
                <PriceHighlight variant="income">U$ 2500</PriceHighlight>
              </td>
              <td>Income</td>
              <td>13 Apr 22</td>
            </tr>
            <tr>
              <td>Groceries</td>
              <td>
                <PriceHighlight variant="outcome">- U$ 500</PriceHighlight>
              </td>
              <td>Food</td>
              <td>13 Apr 22</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransacationsContainer>
    </>
  );
}
