export default function UserInput({ onChangeInput, userInputValues }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" required value={userInputValues.initialInvestment} onChange={(e) => onChangeInput("initialInvestment", e.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" required value={userInputValues.annualInvestment} onChange={(e) => onChangeInput("annualInvestment", e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" required value={userInputValues.expectedReturn} onChange={(e) => onChangeInput("expectedReturn", e.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required value={userInputValues.duration} onChange={(e) => onChangeInput("duration", e.target.value)} />
                </p>
            </div>
        </section>
    );
}
