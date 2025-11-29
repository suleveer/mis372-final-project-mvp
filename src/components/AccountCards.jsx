import React from "react";
export default function AccountCards({
  accounts,
  selectedAccountId,
  showBalance,
  onSelectAccount,
}) {
  return (
    <div className="account-grid">
      {accounts.map((acct) => {
        const isActive = acct.account_id === selectedAccountId;
        const displayBalance = acct.balance ?? null;

        return (
          <div
            key={acct.account_id}
            className={`account-card ${isActive ? "account-card-active" : ""}`}
            onClick={() => onSelectAccount(acct.account_id)}
          >
            <div className="account-card-header-row">
              <h3>{acct.name}</h3>
            </div>

            {displayBalance != null && (
              <p className="account-balance">
                {showBalance
                  ? `$${Number(displayBalance).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}`
                  : "•••••"}
              </p>
            )}

            <p className="account-number">
              •••• {acct.account_number.slice(-4)}
            </p>
            {isActive && (
              <p className="account-active-label">Active</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
