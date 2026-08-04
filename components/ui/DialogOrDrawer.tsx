import { ReactNode } from "react"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./drawer"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface Props {
    children: ReactNode
    content: ReactNode
    className?: string
}

const DialogOrDrawer: React.FC<Props> = ({ children, content, className }) => {

    return (
        <>
            <span className="hidden md:inline-block">
                <Dialog>
                    <DialogTrigger>
                        {children}
                    </DialogTrigger>
                    <DialogContent className={cn(className)}>
                        {content}
                        <footer className="border-t bg-background px-8 py-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex gap-3">
                                    <DialogClose render={<Button variant="outline">Cancel</Button>} />
                                    <DialogClose render={<Button>Accept & Continue</Button>} />
                                </div>
                            </div>
                        </footer>
                    </DialogContent>
                </Dialog>
            </span>
            <span className="md:hidden">
                <Drawer>
                    <DrawerTrigger>
                        {children}
                    </DrawerTrigger>
                    <DrawerContent className={cn(className)}>
                        {content}
                        {/* Footer */}
                        <footer className="border-t bg-background px-8 py-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex gap-3">
                                    <DrawerClose render={<Button variant="outline">Cancel</Button>} />
                                    <DrawerClose render={<Button>Accept & Continue</Button>} />
                                </div>
                            </div>
                        </footer>
                    </DrawerContent>
                </Drawer>
            </span>
        </>
    )
}

export default DialogOrDrawer;