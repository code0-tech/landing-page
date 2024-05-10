import React from "react";
import {Button, Col, Container, Row, Text} from "@code0-tech/pictor";
import {IconBrandGithub} from "@tabler/icons-react";

export const OpenSourceSection: React.FC = () => {
    return <Container my={5} ta={"center"}>
        <Row>
            <Col xs={12} lg={2}><></>
            </Col>
            <Col xs={12} lg={8} pos={"relative"} style={{overflow:"hidden"}}>
                <div style={{
                    position: "relative",
                    zIndex: 2
                }}>
                    <h1 style={{color: "white", fontSize: "3rem"}}>We are <br/>
                        <span style={{color: "#70ffb2"}}>open-source </span></h1>
                    <Text size={"md"} mt={1} display={"block"} style={{textShadow: "#030014 0 0 1rem"}}
                          hierarchy={"primary"}>
                        Our complete platform is open-source and everyone can contribute to the backend revolution.
                        With our free-to-use self-hosted community edition you can tryout new features and play around.
                    </Text>
                    <Button href={"https://github.com/code0-tech"} display={"inline-flex"} mb={0} mt={1}
                            color={"secondary"}>
                        <Button.Icon>
                            <IconBrandGithub/>
                        </Button.Icon>
                        Contribute now on GitHub
                    </Button>
                </div>

                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0
                }}>
                    <Text size={"md"} hierarchy={"tertiary"} className={"text-code-animation"}>
                        {
                            "def execute     authorization_token = request.headers['Authorization']      current_authorization = find_authorization(authorization_token)      return head :unauthorized if authorization_token.present? == current_authorization.none?     return head :unauthorized if current_authorization.invalid?     return head :forbidden if !current_authorization.mutations_allowed? && mutation? && !anonymous_mutation?      current_user = current_authorization.authorization&.user      variables = prepare_variables(params[:variables])     query = params[:query]     operation_name = params[:operationName]     context = {       current_user: current_user,       current_authorization: current_authorization.authorization,     }      Sagittarius::Context.with_context(user: { id: current_user&.id, username: current_user&.username }) do       result = SagittariusSchema.execute(query, variables: variables, context: context, operation_name: operation_name)       render json: result     rescue StandardError => e       logger.error message: e.message, backtrace: e.backtrace, exception_class: e.class        if Rails.env.local?         render json: { errors: [{ message: e.message, backtrace: e.backtrace }], data: {} },                status: :internal_server_error       else         render json: { message: 'Internal server error' }, status: :internal_server_error       end     end   end"
                        }
                    </Text>
                </div>

            </Col>
            <Col xs={12} lg={2}><></>
            </Col>
        </Row>
    </Container>
}