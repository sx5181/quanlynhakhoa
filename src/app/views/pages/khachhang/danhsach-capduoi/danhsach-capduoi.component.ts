import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { BehaviorSubject, Subject } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'kt-danhsach-capduoi',
  templateUrl: './danhsach-capduoi.component.html',
  styleUrls: ['./danhsach-capduoi.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DanhsachCapduoiComponent implements OnInit, AfterViewInit {

  recursive: boolean = false;
  levels = new Map<GameNode, number>();
  treeControl: NestedTreeControl<GameNode>;


  dataSource: MatTreeNestedDataSource<GameNode>;

  dataChange = new BehaviorSubject<GameNode[]>([]);

  constructor(private changeDetectorRef: ChangeDetectorRef) {

    this.treeControl = new NestedTreeControl<GameNode>(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource<GameNode>();
    //demo sau 1s moi lay duoc du lieu
    setTimeout(() => this.dataChange.next(TREE_DATA), 1000);

    this.dataChange.subscribe(data => {

      this.dataSource.data = data;

      setTimeout(() => {
        data.push(new GameNode({ fullname: "Nguyen Van Vinh", phone: "098898993" }, [
          new GameNode({ fullname: "Hoang Tuan Kiet", phone: "098898993" })
        ]));
        this.dataSource.data = data;

      }, 2000)

    });


  }

  getChildren = (node: GameNode) => {
    return node.children;
  };

  hasChildren = (index: number, node: GameNode) => {
    return node.children.value.length > 0;
  }

  expand() {
    for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
      this.treeControl.expand(this.treeControl.dataNodes[i])
    }
  }

  //click node
  clickNode(node) {
    alert(JSON.stringify(node));
  }


  //filter
  filterChanged(filterText: string): void {

  }


  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}



export class NhanVienNode {
  fullname: string;
  phone: string
}
export class GameNode {
  children: BehaviorSubject<GameNode[]>;
  constructor(public item: NhanVienNode, children?: GameNode[], public parent?: GameNode) {
    this.children = new BehaviorSubject(children === undefined ? [] : children);
  }
}

const TREE_DATA = [
  new GameNode({ fullname: "Dinh Tran Linh", phone: "098898998" }, [
    new GameNode({ fullname: "Trinh Kim Tuan", phone: "098898993" }),
    new GameNode({ fullname: "Dam Hoang Viet Khanh", phone: "098898992" }),
  ]),

];