import { rgba } from "polished";
import React, { useState } from "react";
import styled, { css } from "styled-components";

const transition = css`
    transition: transform 0.45s;
`;

const Card = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    padding-top: 6px;
    position: relative;
`;

const Button = styled.div`
    border-bottom: 1px solid ${ p => rgba( "white", p.active ? 0.85 : 0.2 ) };
    color: ${ p => rgba( "white", p.active ? 0.85 : 0.50 ) };
    cursor: pointer;
    flex: 1 1 25%;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 10px;
    padding-top: 4px;
    transition: all 0.45s;
    text-align: center;
`;

const Content = styled.div`
    display: flex;
    height: 100%;
    position: absolute;
    transform:  translateX( ${ p => p.active === 0 ? 0 : `-${ p.active * 25 }%`} );
    ${ transition };
    `;

const Tab = styled.div`
    width: 100vw;
`;

const tabs = [ "Top", "Accounts", "Tags", "Places" ];

const Tabs = ({ active, setActive }) => (
    <Row>
        { tabs.map( ( tab, index ) => <Button active={ active === index } onClick={ () => setActive( index ) } key={ index }>{ tab }</Button> )}
    </Row>
);

const TabbedCard = () => {
    const [ active, setActive ] = useState( 0 );

    return (
        <Card>
            <Tabs active={ active } setActive={ setActive } />
            <Content active={ active }>
                { tabs.map( ( tab ) => (
                    <Tab className="dark:text-white pl-6" key={ tab }>
                        { active === 0 &&
                            <div className="h-full w-full">
                                <h1 className="text-white">Top</h1>
                            </div>
                        }
                        { active === 1 &&
                            <h1>Accounts</h1>
                        }
                        { active === 2 && 
                            <h1>Audio</h1>
                        }
                        { active === 3 && 
                            <h1>Tags</h1>
                        }
                        { active === 4 && 
                            <h1>Places</h1>
                        }
                    </Tab>
                ))}
            </Content>
        </Card>
    )
};

export const ExploreSearch = () => {
    return <TabbedCard />
};