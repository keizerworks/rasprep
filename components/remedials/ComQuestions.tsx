import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function ComQuestions() {
    return (
      <Accordion type="single" collapsible className="w-full text-sm">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit.?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corporis totam aspernatur maiores voluptates, iure exercitationem impedit, explicabo optio rerum esse illo dolore ut id quasi similique labore eaque unde?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger className="text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit.?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corporis totam aspernatur maiores voluptates, iure exercitationem impedit, explicabo optio rerum esse illo dolore ut id quasi similique labore eaque unde?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit.?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corporis totam aspernatur maiores voluptates, iure exercitationem impedit, explicabo optio rerum esse illo dolore ut id quasi similique labore eaque unde?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  