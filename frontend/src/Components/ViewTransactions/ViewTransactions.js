import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';

function ViewTransactions() {
    const {getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])
    return (
        <ViewTransactionsStyled>
            <InnerLayout>
            <h1>View Transactions</h1>
            {
            <div className="history-con">
            <History /> 
        </div>
        }
        </InnerLayout>
        </ViewTransactionsStyled>
    )
}

const ViewTransactionsStyled = styled.div`
    .history-con {
        padding: 2rem;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        margin: 2rem;
        }
`;

export default ViewTransactions;