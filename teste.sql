SELECT CONTRACT.AddressType, POLICY.AddresseeType, CUSTOMER.Building, CUSTOMER.BusinessEmail, CUSTOMER.BusinessPhone, CONTRACT.City, CONTRACT.Country, CUSTOMER.DentistReferenceId, CUSTOMER.ExternalDentistId, 
                  CUSTOMER.ExternalDentistSystemId, CUSTOMER.FatherName, CUSTOMER.Gender, CUSTOMER.HomePhone, CONTRACT.HouseNumber, CUSTOMER.IdentityCard, CUSTOMER.IdentityCardIssueDate, 
                  CUSTOMER.IdentityCardIssuingState, CUSTOMER.LastName, CUSTOMER.MaritalStatus, CUSTOMER.MobilePhone, CUSTOMER.MotherName, CUSTOMER.NationalId, CONTRACT.Neighborhood, CUSTOMER.PEP, 
                  CUSTOMER.PersonBirthdate, CONTRACT_ITEM.PersonId, CUSTOMER.PersonTypeName, CUSTOMER.PersonalEmail, CONTRACT.PostalCode, CUSTOMER.Specialty, CONTRACT.State, CUSTOMER.Status, CONTRACT.Street, 
                  CONTRACT_ITEM.tTimeStamp
FROM     dbo.tbContractItem AS CONTRACT_ITEM INNER JOIN
                  dbo.tbCustomer AS CUSTOMER ON CONTRACT_ITEM.PersonId = CUSTOMER.PersonId INNER JOIN
                  dbo.tbContract AS CONTRACT ON CONTRACT_ITEM.ExternalContractId = CONTRACT.ExternalContractId INNER JOIN
                  dbo.tbPolicyItem AS POLICY_ITEM ON CONTRACT_ITEM.PersonId = POLICY_ITEM.PersonId INNER JOIN
                  dbo.tbPolicy AS POLICY ON POLICY_ITEM.ExternalPolicyId = POLICY.ExternalPolicyId
WHERE  (CONTRACT_ITEM.tTimeStamp > "CAST"(? AS BIGINT) OR
                  CUSTOMER.tTimeStamp > "CAST"(? AS BIGINT) OR
                  CONTRACT.tTimeStamp > "CAST"(? AS BIGINT) OR
                  POLICY_ITEM.tTimeStamp > "CAST"(? AS BIGINT) OR
                  POLICY.tTimeStamp > "CAST"(? AS BIGINT))
ORDER BY CONTRACT_ITEM.tTimeStamp ASC