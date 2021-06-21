import axios from "axios";
//API for fetching data for finance
const FINANCE_API_BASE_URL = "http://localhost:8081/finance";
class FinanceService {
  // Fetching data for getAllFinanceDetails
  async findAllFinanceDetails() {
    return await axios.get(FINANCE_API_BASE_URL);
  }
  // Adding the data to finance
  async createFinance(finance) {
    return await axios.post(FINANCE_API_BASE_URL, finance);
  }
  // Fetching data for getFinanceById
  async findByFinanceId(financeId) {
    return await axios.get(FINANCE_API_BASE_URL + "/" + financeId);
  }
  // Updating data for Finance
  async updateFinance(financeId, finance) {
    return await axios.put(FINANCE_API_BASE_URL + "/" + financeId, finance);
  }
  // deleting the finance details
  async deleteFinance(financeId) {
    return await axios.delete(FINANCE_API_BASE_URL + "/" + financeId);
  }
}
export default new FinanceService();
