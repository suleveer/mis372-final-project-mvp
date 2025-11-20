import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);

  // Dummy data for now — backend later
  const accounts = {
    checking: 8234.50,
    savings: 4123.80
  };

  const recentTransactions = [
    { id: 1, name: "Coffee Shop", amount: -4.50, date: "2025-11-14" },
    { id: 2, name: "Salary Deposit", amount: 3500.00, date: "2025-11-13" },
    { id: 3, name: "Grocery Store", amount: -87.32, date: "2025-11-12" },
  ];

  const totalBalance = accounts.checking + accounts.savings;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome back!</h1>
      <p style={styles.subtitle}>Here’s what’s happening today.</p>

      {/* Total balance card */}
      <div style={styles.balanceCard}>
        <div style={styles.balanceHeader}>
          <h3>Total Balance</h3>
          <div onClick={() => setShowBalance(!showBalance)} style={styles.eyeIcon}>
            {showBalance ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        </div>

        <p style={styles.balanceAmount}>
          {showBalance ? `$${totalBalance.toLocaleString()}` : "•••••"}
        </p>
      </div>

      {/* Accounts section */}
      <div style={styles.accountGrid}>
        {/* Checking */}
        <div style={styles.accountCard}>
          <h3>Checking</h3>
          <p style={styles.accountBalance}>${accounts.checking.toLocaleString()}</p>
          <p style={styles.accountNumber}>•••• 4829</p>
        </div>

        {/* Savings */}
        <div style={styles.accountCard}>
          <h3>Savings</h3>
          <p style={styles.accountBalance}>${accounts.savings.toLocaleString()}</p>
          <p style={styles.accountNumber}>•••• 5941</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <h2 style={{ marginTop: "30px" }}>Recent Transactions</h2>
      <div>
        {recentTransactions.map(tx => (
          <div key={tx.id} style={styles.transactionRow}>
            <div>
              <strong>{tx.name}</strong>
              <p style={styles.txDate}>{tx.date}</p>
            </div>

            <p style={{ 
              color: tx.amount < 0 ? "red" : "green",
              fontWeight: "bold"
            }}>
              {tx.amount < 0 ? tx.amount.toFixed(2) : `+${tx.amount.toFixed(2)}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// SIMPLE INLINE STYLES (clean and easy for MVP)
const styles = {
  container: {
    padding: "30px",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: "-10px",
    color: "#555",
  },
  balanceCard: {
    marginTop: "20px",
    padding: "25px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    borderRadius: "16px",
  },
  balanceHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  eyeIcon: {
    cursor: "pointer"
  },
  balanceAmount: {
    fontSize: "28px",
    marginTop: "15px",
    fontWeight: "700",
  },
  accountGrid: {
    display: "flex",
    gap: "20px",
    marginTop: "25px",
  },
  accountCard: {
    flex: 1,
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    border: "1px solid #eee",
  },
  accountBalance: {
    fontSize: "22px",
    fontWeight: "600",
  },
  accountNumber: {
    marginTop: "-5px",
    color: "gray",
  },
  transactionRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },
  txDate: {
    color: "gray",
    fontSize: "14px",
    marginTop: "-3px",
  }
};
