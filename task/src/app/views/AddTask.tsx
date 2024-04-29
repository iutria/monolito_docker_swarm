import {
  Button,
  Card,
  Container,
  Loading,
} from "@nextui-org/react";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { Task } from "../models/Task";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { InputDescription } from "../components/form/InputDescription";
import { InputTitle } from "../components/form/InputTitle";
import { Banner } from "../components/atomics/Banner";
import { useTask } from "../states/useTask";

const AddTask = () => {
  const params = useParams();
  const { getTask, task, isLoading, addTask, putTask, setDefault } = useTask();

  const handleValidate = (values: Task) => {
    const errors: any = {};
    if (values.title.length == 0) {
      errors.title = "Debe ingresar un titulo";
    }
    return errors;
  };

  const handleSubmit = async(task: Task , actions: FormikHelpers<Task>)=>{
    let resp;
    if(params.id){
      return await putTask(task);
    }else{
      resp = await addTask(task);
      if(resp){
        actions.resetForm();
      }
      return resp;
    }
  }

  useEffect(() => {
    !params.id && setDefault();
    params.id && getTask(params.id);
  }, []);

  const SubmmitButton = ()=>{
    const formik = useFormikContext();
    return <Button type="submit">{
      formik.isSubmitting ? 
      <Loading type="points" color="currentColor" size="sm" />
      :'Guardar'
    }</Button>
  }

  return (
    <Container css={{padding: '$10'}}>
      {!isLoading && <Formik
        initialValues={task}
        onSubmit ={handleSubmit}
        validate= {handleValidate}
        validateOnChange = {false}
      >
        <Form>
          <Card variant="bordered">
            <Card.Header css={{padding: '$0', flexDirection: 'column'}}>
              <Banner />
              <InputTitle />
            </Card.Header>
            <Card.Body>
              <InputDescription />
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <SubmmitButton />
            </Card.Footer>
          </Card>
        </Form>
      </Formik>}
    </Container>
  );
};

export default AddTask;