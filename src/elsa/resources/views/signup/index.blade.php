<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compliance Questions Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        h2 {
            color: #555;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
        }
        label {
            display: block;
            margin: 10px 0 5px;
        }
        input, textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        textarea {
            resize: vertical;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #45a049;
        }
        .section {
            display: none;
        }
    </style>
</head>
<body>

    <h1>Compliance Questions Form</h1>
    
    <form>
        <h2>Welcome to Biz Boost SA</h2>

        <label>Are you a small business owner or a micro lender?</label>
        <select id="businessType" onchange="showRelevantSection()">
            <option value="">Select an option</option>
            <option value="smallBusiness">Small Business</option>
            <option value="microLender">Micro Lender</option>
        </select>

        <!-- Small Business Questions -->
        <div id="smallBusinessSection" class="section">
            <h2>FICA Compliance Questions</h2>
            <label for="fullName">1. What is your full name and surname?</label>
            <input type="text" id="fullName" name="fullName" required>
            
            <label for="idNumber">2. What is your South African ID number?</label>
            <input type="text" id="idNumber" name="idNumber" required>
            
            <label for="dob">3. What is your date of birth?</label>
            <input type="date" id="dob" name="dob" required>
            
            <label for="address">4. What is your physical residential address? (Include proof of residence if possible)</label>
            <textarea id="address" name="address" rows="3" required></textarea>
            
            <label for="contactNumber">5. What is your primary contact number?</label>
            <input type="tel" id="contactNumber" name="contactNumber" required>
            
            <label for="registeredBusiness">6. Do you have any registered business entities? If yes, please provide the business registration number.</label>
            <input type="text" id="registeredBusiness" name="registeredBusiness">
            
            <label for="businessType">7. What type of business do you own or operate?</label>
            <input type="text" id="businessType" name="businessType" required>
            
            <label for="operationalDuration">8. How long has your business been operational?</label>
            <input type="text" id="operationalDuration" name="operationalDuration" required>
            
            <label for="pep">9. Are you or any member of your business a politically exposed person (PEP)?</label>
            <input type="text" id="pep" name="pep" required>
            
            <label for="businessIncome">10. What is the primary source of your business income?</label>
            <input type="text" id="businessIncome" name="businessIncome" required>
            
            <label for="taxId">11. Do you have a valid tax identification number? (if applicable)</label>
            <input type="text" id="taxId" name="taxId">
            
            <label for="bankAccount">12. Please provide the name of your business bank account and the associated account number.</label>
            <input type="text" id="bankAccount" name="bankAccount" required>
        </div>

        <!-- Micro Lender Questions -->
        <div id="microLenderSection" class="section">
            <h2>NCR-Compliant Questions for Micro Lenders</h2>
            <label for="monthlyIncome">1. What is your monthly business income?</label>
            <input type="number" id="monthlyIncome" name="monthlyIncome" required>
            
            <label for="monthlyExpenses">2. What are your average monthly business expenses?</label>
            <input type="number" id="monthlyExpenses" name="monthlyExpenses" required>
            
            <label for="existingLoans">3. Do you have any existing loans or financial obligations? If yes, please specify.</label>
            <textarea id="existingLoans" name="existingLoans" rows="3"></textarea>
            
            <label for="loanPurpose">4. What is the purpose of the loan or credit facility you’re applying for?</label>
            <textarea id="loanPurpose" name="loanPurpose" rows="3" required></textarea>
            
            <label for="fundingAmount">5. How much funding are you requesting for your business?</label>
            <input type="number" id="fundingAmount" name="fundingAmount" required>
            
            <label for="repaymentDuration">6. How long would you need to repay the loan?</label>
            <input type="text" id="repaymentDuration" name="repaymentDuration" required>
            
            <label for="collateral">7. Are you able to provide any form of collateral or business asset to support your application?</label>
            <input type="text" id="collateral" name="collateral">
            
            <label for="debtRepaymentIssues">8. Do you or your business have a history of any debt repayment issues or defaults?</label>
            <input type="text" id="debtRepaymentIssues" name="debtRepaymentIssues" required>
            
            <label for="dependents">9. Do you have any dependents or family members who rely on your business income?</label>
            <input type="text" id="dependents" name="dependents" required>
            
            <label for="rightsResponsibilities">10. Have you been informed about your rights and responsibilities as a borrower under the National Credit Act?</label>
            <input type="text" id="rightsResponsibilities" name="rightsResponsibilities" required>
            
            <label for="creditManagement">11. How comfortable are you with managing credit? Rate yourself on a scale of 1 to 5.</label>
            <input type="number" id="creditManagement" name="creditManagement" min="1" max="5" required>
            
            <label for="interestRate">12. Are you aware of the interest rate and repayment terms of this loan?</label>
            <input type="text" id="interestRate" name="interestRate" required>
            
            <label for="repaymentPlan">13. How do you plan to repay the loan on time? Describe your expected income sources.</label>
            <textarea id="repaymentPlan" name="repaymentPlan" rows="3" required></textarea>
        </div>

        <button type="submit">Submit</button>
    </form>

    <script>
        function showRelevantSection() {
            const businessType = document.getElementById("businessType").value;
            document.getElementById("smallBusinessSection").style.display = (businessType === "smallBusiness") ? "block" : "none";
            document.getElementById("microLenderSection").style.display = (businessType === "microLender") ? "block" : "none";
        }
    </script>

</body>
</html>