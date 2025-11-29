import { useEffect, useState } from "react";

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);
  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);

  // TEMPORARY for Phase 2 until Asgardeo is active:
const accountId = 1; // use a real existing account ID


  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(`http://localhost:5000/api/accounts/${accountId}`);
        const data = await res.json();

        setAccount(data);
        setTransactions(data.transactions || []);

      } catch (err) {
        console.error("Failed to load account:", err);
      }
    }

    loadData();
  }, []);

  if (!account) {
    return <p style={{ padding: "30px" }}>Loading account...</p>;
  }

  const totalBalance = account.balance;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome back!</h1>
      <p style={styles.subtitle}>Here’s what’s happening today.</p>

      {/* Total Balance */}
      <div style={styles.balanceCard}>
        <div style={styles.balanceHeader}>
          <h3>Total Balance</h3>

          <button 
            onClick={() => setShowBalance(!showBalance)}
            style={styles.showHideButton}
          >
            {showBalance ? "Hide" : "Show"}
          </button>
        </div>

        <p style={styles.balanceAmount}>
          {showBalance ? `$${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : "•••••"}
        </p>
      </div>

      {/* Account Card */}
      <div style={styles.accountGrid}>
        <div style={styles.accountCard}>
          <h3>{account.name}</h3>
          <p style={styles.accountBalance}>
            ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
          <p style={styles.accountNumber}>•••• {account.account_number.slice(-4)}</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <h2 style={styles.recentTitle}>Recent Transactions</h2>

      {transactions.map(tx => (
        <div key={tx.transaction_id} style={styles.transactionRow}>
          <div>
            <strong>{tx.description || tx.transaction_type}</strong>
            <p style={styles.txDate}>{tx.created_at.split("T")[0]}</p>
          </div>

          <p style={{
            color: tx.transaction_type === "withdraw" ? "red" : "green",
            fontWeight: "bold"
          }}>
            {tx.transaction_type === "withdraw"
              ? `-${Number(tx.amount).toFixed(2)}`
              : `+${Number(tx.amount).toFixed(2)}`
            }
          </p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh"
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1f2937"
  },

  subtitle: {
    marginTop: "-10px",
    color: "#4b5563",
    fontSize: "16px"
  },

  balanceCard: {
    marginTop: "20px",
    padding: "30px",
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "#f0f4ff",
    borderRadius: "16px",
  },

  balanceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  showHideButton: {
    background: "rgba(255,255,255,0.25)",
    border: "none",
    color: "#ffffff",
    padding: "6px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500"
  },

  balanceAmount: {
    fontSize: "36px",
    marginTop: "15px",
    fontWeight: "700",
    color: "#ffffff"
  },

  accountGrid: {
    display: "flex",
    gap: "20px",
    marginTop: "25px",
  },

  accountCard: {
    flex: 1,
    padding: "22px",
    background: "#ffffff",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    color: "#111827"
  },

  accountBalance: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#111827"
  },

  accountNumber: {
    marginTop: "-5px",
    color: "#6b7280",
    fontSize: "14px"
  },

  recentTitle: {
    marginTop: "30px",
    fontSize: "22px",
    fontWeight: "700",
    color: "#1f2937"
  },

  transactionRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid #e5e7eb",
    color: "#111827"
  },

  txDate: {
    color: "#6b7280",
    fontSize: "14px",
    marginTop: "-3px",
  }
};
